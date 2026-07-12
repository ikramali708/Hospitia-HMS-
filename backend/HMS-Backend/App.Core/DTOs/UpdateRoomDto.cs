namespace App.Core.DTOs;

public class UpdateRoomDto
{
    public string RoomNumber { get; set; } = string.Empty;

    public string RoomType { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public int Capacity { get; set; }

    public string Status { get; set; } = string.Empty;
}