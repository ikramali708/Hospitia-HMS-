using App.Domain.Entities;

namespace App.Core.Interfaces;

public interface IJwtService
{
    string GenerateToken(Admin admin);
}