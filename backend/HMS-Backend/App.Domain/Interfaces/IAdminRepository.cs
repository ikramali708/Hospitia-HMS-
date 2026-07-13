using App.Domain.Entities;

namespace App.Domain.Interfaces;

public interface IAdminRepository
{
    Task<Admin?> GetByEmailAsync(string email);

    Task<Admin?> GetByResetTokenAsync(string token);

    Task<bool> EmailExistsAsync(string email);

    Task AddAsync(Admin admin);

    void Update(Admin admin);

    Task SaveChangesAsync();
}