using BBQ.Api.Data;
using BBQ.Api.Endpoints;
using Microsoft.EntityFrameworkCore;

namespace BBQ.Api.Features;

public static class GetAboutMe
{
    private record GetResponse(string FullName, string Bio);

    private record UpdateRequest(string FullName, string Bio);

    private record AddRequest(string FullName, string Bio);

    public sealed class Endpoint : IEndpoint
    {
        public void MapEndpoint(IEndpointRouteBuilder app)
        {
            app.MapGet("/about-me", Get).WithTags("AboutMe");
            app.MapPut("/about-me", Put).WithTags("AboutMe"); // create or replace
            app.MapPatch("/about-me", Patch).WithTags("AboutMe"); // partial update
            app.MapDelete("/about-me", Delete).WithTags("AboutMe");
        }
    }

    private static async Task<IResult> Get(AppDbContext context)
    {
        var about = await context.AboutMes.Select(x => new GetResponse(x.FullName, x.Bio))
            .ToListAsync();
        return Results.Ok(about);
    }

    private static async Task<IResult> Patch(UpdateRequest request, AppDbContext context)
    {
        var about = await context.AboutMes.FirstOrDefaultAsync();
        if (about is null)
            return Results.NotFound();

        about.FullName = request.FullName;
        about.Bio = request.Bio;

        await context.SaveChangesAsync();
        return Results.NoContent();
    }

    private static async Task<IResult> Delete(AppDbContext context)
    {
        var about = await context.AboutMes.FirstOrDefaultAsync();
        if (about is null)
            return Results.NotFound();

        context.AboutMes.Remove(about);
        await context.SaveChangesAsync();
        return Results.NoContent();
    }

    private static async Task<IResult> Put(AddRequest request, AppDbContext context)
    {
        var existing = await context.AboutMes.AnyAsync();
        if (existing)
            return Results.BadRequest("AboutMe already exists. Use PUT to update.");

        var about = new AboutMe
        {
            FullName = request.FullName,
            Bio = request.Bio
        };

        context.AboutMes.Add(about);
        await context.SaveChangesAsync();
        return Results.Created($"/about-me", about);
    }
}