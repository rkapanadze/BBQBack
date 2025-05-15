using BBQ.Api.Data;
using BBQ.Api.Data.Enums;
using BBQ.Api.Endpoints;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BBQ.Api.Features.SaucesAndRubs;

public static class SauceAndRubs
{
    private record AddSauceOrRubRequest(string Name, string Description, string Ingredients, SauceOrRubType type);

    private record PatchSauceOrRubRequest(int Id, string Name, string Description, string Ingredients);

    private record DeleteSauceOrRubRequest(int Id);

    private record GetSauceOrRubRequest(SauceOrRubType? type);

    public sealed class Endpoint : IEndpoint
    {
        public void MapEndpoint(IEndpointRouteBuilder app)
        {
            app.MapGet("/sauceAndRubs", Get).WithTags("SauceAndRubs");
            app.MapPut("/sauceAndRubs", Put).WithTags("SauceAndRubs");
            app.MapPatch("/sauceAndRubs", Patch).WithTags("SauceAndRubs");
            app.MapDelete("/sauceAndRubs", Delete).WithTags("SauceAndRubs");
        }
    }

    private static async Task<IResult> Get([AsParameters] GetSauceOrRubRequest request, AppDbContext context,
        CancellationToken cancellationToken)
    {
        var query = context.SaucesAndRubs.AsQueryable();
        query = request.type is not null ? query.Where(x => x.Type == request.type) : query.OrderBy(x => x.Type);

        var result = await query.ToListAsync(cancellationToken);
        return Results.Ok(result);
    }

    private static async Task<IResult> Put([FromBody] AddSauceOrRubRequest sauceOrRubRequest, AppDbContext context,
        CancellationToken cancellationToken)
    {
        var about = new Data.SauceAndRub
        {
            Name = sauceOrRubRequest.Name,
            Description = sauceOrRubRequest.Description,
            Ingredients = sauceOrRubRequest.Ingredients,
            Type = sauceOrRubRequest.type
        };
        context.SaucesAndRubs.Add(about);
        await context.SaveChangesAsync(cancellationToken);
        return Results.Created($"/sauce", about);
    }

    private static async Task<IResult> Patch([FromBody] PatchSauceOrRubRequest orRubRequest, AppDbContext context,
        CancellationToken cancellationToken)
    {
        var entity = await context.SaucesAndRubs.FindAsync(orRubRequest.Id, cancellationToken);
        if (entity is null)
            return Results.NotFound();

        entity.Name = orRubRequest.Name;
        entity.Description = orRubRequest.Description;
        entity.Ingredients = orRubRequest.Ingredients;

        await context.SaveChangesAsync(cancellationToken);
        return Results.NoContent();
    }

    private static async Task<IResult> Delete([FromBody] DeleteSauceOrRubRequest orRubRequest, AppDbContext context,
        CancellationToken cancellationToken)
    {
        var entity = await context.SaucesAndRubs.FindAsync(orRubRequest.Id, cancellationToken);
        if (entity is null)
            return Results.NotFound();

        context.SaucesAndRubs.Remove(entity);
        await context.SaveChangesAsync(cancellationToken);
        return Results.NoContent();
    }
}