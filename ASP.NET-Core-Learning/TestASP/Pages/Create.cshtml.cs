using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TestASP.Pages
{
    public class CreateModel : PageModel
    {
        private readonly AppDbContext _db;

        private ILogger<CreateModel> Log;

        public CreateModel(AppDbContext db, ILogger<CreateModel> log)
        {
            _db = db;
            Log = log;
        }

        [TempData]
        public string Message { get; set; }

        [BindProperty]
        public Costumer Costumer { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if(!ModelState.IsValid)
            {
                return Page();
            }

            _db.Costumers.Add(Costumer);
            await _db.SaveChangesAsync();
            var msg = $"Costumer {Costumer.Name} added!";
            Message = msg;
            Log.LogCritical(msg);
            return RedirectToPage("/Index");
        }
    }
}