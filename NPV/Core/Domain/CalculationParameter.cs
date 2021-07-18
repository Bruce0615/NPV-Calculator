using NPV.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPV.Core.Domain
{
    public class CalculationParameter: NPVParameter
    {       
        public decimal[] Cashflows { get; set; }
    }
}