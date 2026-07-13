using App.Data.Contexts;
using App.Domain.Entities;
using App.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace App.Data.Repositories;

public class AdminRepository : IAdminRepository
{
    private readonly ApplicationDbContext _context;

    public AdminRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Admin?> GetByEmailAsync(string email)
    {
        return await _context.Admins
            .FirstOrDefaultAsync(x => x.Email == email);
    }
    public async Task<Admin?> GetByResetTokenAsync(string token)
    {
        return await _context.Admins
            .FirstOrDefaultAsync(x => x.PasswordResetToken == token);
    }

    public async Task<bool> EmailExistsAsync(string email)
    {
        return await _context.Admins
            .AnyAsync(x => x.Email == email);
    }

    public async Task AddAsync(Admin admin)
    {
        await _context.Admins.AddAsync(admin);
    }

    public void Update(Admin admin)
    {
        _context.Admins.Update(admin);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}