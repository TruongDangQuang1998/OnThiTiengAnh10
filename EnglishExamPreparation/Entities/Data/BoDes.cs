using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Data
{
    public class BoDes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string City { get; set; }
        public ICollection<Questions> Questions { get; set; }
        //public string 
    }
    //?? nên có thêm bản City không
}
