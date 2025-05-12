using BBQ.Api.Data;
using BBQ.Api.Endpoints;
using Microsoft.EntityFrameworkCore;

namespace BBQ.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddDbContext<AppDbContext>(o => o.UseInMemoryDatabase("BBQ"));

        builder.Services.AddEndpoints();
        var app = builder.Build();

        app.UseSwagger();
        app.UseSwaggerUI();
        app.MapEndpoints();
        app.Run();
    }
}