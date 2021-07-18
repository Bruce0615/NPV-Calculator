using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPV.Core.Domain
{
    public class NPVResult
    {
        public decimal DiscountRate { get; set; }
        public decimal Npv { get; set; }
    }
}