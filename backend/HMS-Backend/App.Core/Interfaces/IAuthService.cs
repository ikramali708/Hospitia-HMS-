using App.Core.DTOs;

namespace App.Core.Interfaces;

public interface IAuthService
{
    Task<AuthResponseDto?> LoginAsync(LoginDto dto);

    Task ForgotPasswordAsync(ForgotPasswordDto dto);

    Task ResetPasswordAsync(ResetPasswordDto dto);
}