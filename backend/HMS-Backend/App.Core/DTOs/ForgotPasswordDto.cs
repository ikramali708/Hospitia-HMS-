using System.ComponentModel.DataAnnotations;

namespace App.Core.DTOs;

public class ForgotPasswordDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
}