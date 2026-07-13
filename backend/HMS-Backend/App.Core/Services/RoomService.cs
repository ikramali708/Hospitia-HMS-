using App.Core.DTOs;
using App.Core.Interfaces;
using App.Domain.Entities;
using App.Domain.Interfaces;
using AutoMapper;

namespace App.Core.Services;

public class RoomService : IRoomService
{
    private readonly IRepository<Room> _repository;

    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;

    public RoomService(
      IRepository<Room> repository,
      IUnitOfWork unitOfWork,
      IMapper mapper)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<IEnumerable<RoomDto>> GetAllAsync()
    {
        var rooms = await _repository.GetAsync(
    orderBy: q => q.OrderBy(r => r.RoomNumber)
);


        return _mapper.Map<IEnumerable<RoomDto>>(rooms);
    }

    public async Task<RoomDto?> GetByIdAsync(int id)
    {
        var room = await _repository.GetByIdAsync(id);

        if (room == null)
            return null;

        return _mapper.Map<RoomDto>(room);
    }
    public async Task<RoomDto> CreateAsync(CreateRoomDto dto)
    {
        var room = _mapper.Map<Room>(dto);

        await _repository.AddAsync(room);

        await _unitOfWork.SaveChangesAsync();

        return _mapper.Map<RoomDto>(room);
    }
    public async Task<bool> UpdateAsync(
    int id,
    UpdateRoomDto dto)
    {
        var room = await _repository.GetByIdAsync(id);

        if (room == null)
            return false;

        _mapper.Map(dto, room);

        room.UpdatedAt = DateTime.UtcNow;

        _repository.Update(room);

        await _unitOfWork.SaveChangesAsync();

        return true;
    }
    public async Task<bool> DeleteAsync(int id)
    {
        var room = await _repository.GetByIdAsync(id);

        if (room == null)
            return false;

        _repository.Delete(room);

        await _unitOfWork.SaveChangesAsync();

        return true;
    }
}