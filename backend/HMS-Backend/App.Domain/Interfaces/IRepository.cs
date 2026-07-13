using System.Linq.Expressions;
using App.Domain.Entities;

namespace App.Domain.Interfaces;

public interface IRepository<T> where T : BaseEntity
{
    Task<IEnumerable<T>> GetAllAsync();

    Task<IEnumerable<T>> GetAsync(
        Expression<Func<T, bool>>? filter = null,
        Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
        string? includeProperties = null);

    Task<T?> GetByIdAsync(int id);

    Task<T?> FirstOrDefaultAsync(
        Expression<Func<T, bool>> filter);

    Task<int> CountAsync(
        Expression<Func<T, bool>>? filter = null);

    Task<bool> ExistsAsync(
        Expression<Func<T, bool>> filter);

    Task AddAsync(T entity);

    void Update(T entity);

    void Delete(T entity);
}