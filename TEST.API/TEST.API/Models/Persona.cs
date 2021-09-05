using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TEST.API.Models
{
    public class Persona
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 50)]
        public string Nombre { get; set; }
        [StringLength(maximumLength: 50)]
        public string APaterno { get; set; }
        [StringLength(maximumLength: 50)]
        public string AMaterno { get; set; }
        public int Edad { get; set; }
    }
}
