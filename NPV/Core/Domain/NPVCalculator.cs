using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPV.Core.Domain
{
    public class NPVCalculator
    {
        public decimal CalculateNPV(decimal InitalValue, decimal DiscountRate, decimal[] Cashflows)
        {            
            return Math.Round(Cashflows.Select((currentValue, index) => currentValue / (decimal)Math.Pow((double)(1 + DiscountRate * 0.01m), index + 1)).Sum() - InitalValue, 2);
        }
    }
}