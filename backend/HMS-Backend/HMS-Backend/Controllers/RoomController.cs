using App.Core.DTOs;
using App.Core.Interfaces;
using App.Core.Results;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomController : ControllerBase
{
    private readonly IRoomService _roomService;

    public RoomController(IRoomService roomService)
    {
        _roomService = roomService;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateRoomDto dto)
    {
        var room = await _roomService.CreateAsync(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = room.Id },
            ApiResponse<RoomDto>.SuccessResponse(
                room,
                "Room created successfully."
            )
        );
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var rooms = await _roomService.GetAllAsync();

        return Ok(
            ApiResponse<IEnumerable<RoomDto>>.SuccessResponse(rooms)
        );
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var room = await _roomService.GetByIdAsync(id);

        if (room == null)
            return NotFound();

        return Ok(
            ApiResponse<RoomDto>.SuccessResponse(room)
        );
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(
        int id,
        UpdateRoomDto dto)
    {
        var updated = await _roomService.UpdateAsync(id, dto);

        if (!updated)
            return NotFound();

        return Ok(
            ApiResponse<string>.SuccessResponse(
                "Room updated.",
                "Success"
            )
        );
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _roomService.DeleteAsync(id);

        if (!deleted)
            return NotFound();

        return Ok(
            ApiResponse<string>.SuccessResponse(
                "Room deleted.",
                "Success"
            )
        );
    }
}