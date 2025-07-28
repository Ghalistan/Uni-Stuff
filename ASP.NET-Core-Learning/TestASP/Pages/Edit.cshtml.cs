using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace TestASP.Pages
{
    public class EditModel : PageModel
    {
        private readonly AppDbContext _db;

        public EditModel(AppDbContext db)
        {
            _db = db;
        }
        
        [BindProperty]
        public Costumer Costumer { get; set; }

        public async Task<IActionResult> OnGetAsync(int id)
        {
            Costumer = await _db.Costumers.FindAsync(id);
            if(Costumer == null)
            {
                return RedirectToPage("/Index");
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if(!ModelState.IsValid)
            {
                return Page();
            }

            _db.Attach(Costumer).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {

                throw new Exception($"Costumer {Costumer.Id} not found!", e);
            }

            return RedirectToPage("./Index");
        }
    }
}