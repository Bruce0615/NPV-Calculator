using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPV.Core.Domain
{
    public abstract class NPVParameter
    {
        public decimal InitialValue { get; set; }
        public decimal LowerBoundDiscountRate { get; set; }
        public decimal UpperBoundDiscountRate {get; set;}
        public decimal DiscountRateIncrement { get; set; }
    }
}