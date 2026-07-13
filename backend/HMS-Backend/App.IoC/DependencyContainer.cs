using App.Core.Interfaces;
using App.Core.Mappings;
using App.Core.Services;
using App.Data.Contexts;
using App.Data.Repositories;
using App.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using App.Core.Settings;
using Microsoft.Extensions.Options;

namespace App.IoC;

public static class DependencyContainer
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseSqlServer(
                configuration.GetConnectionString("DefaultConnection"));
        });
        services.Configure<EmailSettings>(
    configuration.GetSection("EmailSettings"));

        services.AddScoped<IEmailService, EmailService>();
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddScoped<IUnitOfWork, UnitOfWork>();

        services.AddScoped<IRoomService, RoomService>();

        //services.AddScoped<IAuthService, AuthService>();

        //services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IAdminRepository, AdminRepository>();

        services.AddScoped<IAuthService, AuthService>();

        services.AddScoped<IJwtService, JwtService>();

        services.AddAutoMapper(typeof(AutoMapperProfile));

        return services;
    }
}