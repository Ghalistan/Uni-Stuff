using System.ComponentModel.DataAnnotations;

namespace TestASP
{
    public class Costumer
    {
        public int Id { get; set; }

        [Required, StringLength(10)]
        public string Name { get; set; }
    }
}