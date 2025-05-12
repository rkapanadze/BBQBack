using Microsoft.EntityFrameworkCore;

namespace BBQ.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) {}

    public DbSet<AboutMe> AboutMes => Set<AboutMe>();
}