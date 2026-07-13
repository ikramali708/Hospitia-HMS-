using App.Core.DTOs;
using App.Core.Interfaces;
using App.Core.Results;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var result = await _authService.LoginAsync(dto);

        if (result == null)
        {
            return Unauthorized(
                ApiResponse<string>.FailureResponse(
                    new[]
                    {
                        "Invalid email or password."
                    },
                    "Login Failed"));
        }

        return Ok(
            ApiResponse<AuthResponseDto>.SuccessResponse(
                result,
                "Login Successful"));
    }

    [HttpPost("forgot-password")]
    public async Task<IActionResult> ForgotPassword(
        ForgotPasswordDto dto)
    {
        await _authService.ForgotPasswordAsync(dto);

        return Ok(
            ApiResponse<string>.SuccessResponse(
                null,
                "Password reset email sent."));
    }

    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword(
        ResetPasswordDto dto)
    {
        await _authService.ResetPasswordAsync(dto);

        return Ok(
            ApiResponse<string>.SuccessResponse(
                null,
                "Password reset successful."));
    }
}