using System;
using System.Collections.Generic;

namespace Kemenkeu.Models
{
    public partial class Pjpk
    {
        public int Id { get; set; }
        public string Judul { get; set; }
        public string Detail { get; set; }
        public string Foto { get; set; }
        public DateTime TanggalDitambahkan { get; set; }
        public DateTime TanggalDiedit { get; set; }
    }
}
