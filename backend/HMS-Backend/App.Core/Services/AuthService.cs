using App.Core.DTOs;
using App.Core.Helpers;
using App.Core.Interfaces;
using App.Domain.Entities;
using App.Domain.Interfaces;
using App.Core.Helpers;
using System.Text;

namespace App.Core.Services;

public class AuthService : IAuthService
{
    private readonly IAdminRepository _adminRepository;
    private readonly IJwtService _jwtService;
    private readonly IEmailService _emailService;



    public AuthService(
       IAdminRepository adminRepository,
       IJwtService jwtService,
       IEmailService emailService)
    {
        _adminRepository = adminRepository;
        _jwtService = jwtService;
        _emailService = emailService;
    }
    public async Task<AuthResponseDto?> LoginAsync(LoginDto dto)
    {
        var admin = await _adminRepository.GetByEmailAsync(dto.Email);

        if (admin == null)
            return null;

        var validPassword = PasswordHasher.Verify(
            dto.Password,
            admin.PasswordHash
        );

        if (!validPassword)
            return null;

        admin.LastLogin = DateTime.UtcNow;

        var token = _jwtService.GenerateToken(admin);

        return new AuthResponseDto
        {
            Token = token,
            Expiration = DateTime.UtcNow.AddMinutes(60),
            Name = admin.Name,
            Email = admin.Email
        };
    }
    public async Task ForgotPasswordAsync(
    ForgotPasswordDto dto)
    {
        var admin =
            await _adminRepository.GetByEmailAsync(dto.Email);

        if (admin == null)
            return;

        admin.PasswordResetToken =
            Guid.NewGuid().ToString();

        admin.PasswordResetTokenExpiry =
            DateTime.UtcNow.AddMinutes(15);

        _adminRepository.Update(admin);

        await _adminRepository.SaveChangesAsync();

        var resetLink =
            $"https://localhost:5173/reset-password?token={admin.PasswordResetToken}";

        var body = $@"
        <h2>Password Reset</h2>

        <p>Hello {admin.Name},</p>

        <p>Click below link to reset password.</p>

        <a href='{resetLink}'>

            Reset Password

        </a>

        <p>This link expires in 15 minutes.</p>";

        await _emailService.SendEmailAsync(
            admin.Email,
            "Reset Password",
            body);
    }
    public async Task ResetPasswordAsync(
    ResetPasswordDto dto)
    {
        var admin = await _adminRepository.GetByResetTokenAsync(dto.Token);

        if (admin == null)
            throw new Exception("Invalid reset token.");

        if (admin.PasswordResetTokenExpiry == null ||
            admin.PasswordResetTokenExpiry < DateTime.UtcNow)
        {
            throw new Exception("Reset token has expired.");
        }

        admin.PasswordHash = PasswordHasher.Hash(dto.NewPassword);

        admin.PasswordResetToken = null;

        admin.PasswordResetTokenExpiry = null;

        admin.UpdatedAt = DateTime.UtcNow;

        _adminRepository.Update(admin);

        await _adminRepository.SaveChangesAsync();
    }
}