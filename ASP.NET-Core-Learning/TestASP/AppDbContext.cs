using Microsoft.EntityFrameworkCore;

namespace TestASP
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Costumer> Costumers { get; set; }
    }
}