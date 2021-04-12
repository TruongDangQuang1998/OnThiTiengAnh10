using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Data
{
    public class Questions
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string Answer3 { get; set; }
        public string Answer4 { get; set; }
        public string Ansewer { get; set; }
        public int MaDe { get; set; }
        //public int PhanLoai { get; set; }
        public string Describe { get; set; }
        public BoDes BoDes { get; set; }
        public int BoDeId { get; set; }
    }
}
