using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPV.Core.Domain
{
    public class Calculation: NPVParameter
    {
        public int ID { get; set; }
        public DateTime CalculatedDate { get; set; }
        public virtual ICollection<NPVResult> NpvResults { get; set; }
        public virtual ICollection<Cashflow> Cashflows { get; set; }

    }
}