using App.Core.DTOs;
using FluentValidation;

namespace App.Core.Validators;

public class UpdateRoomValidator
    : AbstractValidator<UpdateRoomDto>
{
    public UpdateRoomValidator()
    {
        RuleFor(x => x.RoomNumber)
            .NotEmpty();

        RuleFor(x => x.RoomType)
            .NotEmpty();

        RuleFor(x => x.Price)
            .GreaterThan(0);

        RuleFor(x => x.Capacity)
            .GreaterThan(0);

        RuleFor(x => x.Status)
            .NotEmpty();
    }
}