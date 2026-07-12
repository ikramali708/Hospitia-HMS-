using App.Core.DTOs;
using FluentValidation;

namespace App.Core.Validators;

public class CreateRoomValidator
    : AbstractValidator<CreateRoomDto>
{
    public CreateRoomValidator()
    {
        RuleFor(x => x.RoomNumber)
            .NotEmpty()
            .MaximumLength(10);

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