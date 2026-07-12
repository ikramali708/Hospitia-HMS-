using App.Core.DTOs;
using App.Domain.Entities;
using AutoMapper;

namespace App.Core.Mappings;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Room, RoomDto>();

        CreateMap<RoomDto, Room>();
        CreateMap<CreateRoomDto, Room>();

        CreateMap<UpdateRoomDto, Room>();
    }
}