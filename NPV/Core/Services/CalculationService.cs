using NPV.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace NPV.Core.Services
{
    public class CalculationService
    {
        NPVCalculator calculator = new NPVCalculator();
        public IEnumerable<NPVResult> CalculateNPV(CalculationParameter parameter)
        {
            IList<NPVResult> result = new List<NPVResult>();
            if (parameter.DiscountRateIncrement == 0m)
            {
                result.Add(new NPVResult
                {
                    DiscountRate = parameter.LowerBoundDiscountRate,
                    Npv = calculator.CalculateNPV(parameter.InitialValue, parameter.LowerBoundDiscountRate, parameter.Cashflows)
                });
                result.Add(new NPVResult
                {
                    DiscountRate = parameter.UpperBoundDiscountRate,
                    Npv = calculator.CalculateNPV(parameter.InitialValue, parameter.UpperBoundDiscountRate, parameter.Cashflows)
                });
            }
            else
            {
                for (decimal discountRate = parameter.LowerBoundDiscountRate;
                    discountRate < parameter.UpperBoundDiscountRate;
                    discountRate += parameter.DiscountRateIncrement
                    )
                {
                    decimal npv = calculator.CalculateNPV(parameter.InitialValue, discountRate, parameter.Cashflows);
                    result.Add(new NPVResult { DiscountRate = discountRate, Npv = npv });
                    if (discountRate + parameter.DiscountRateIncrement >= parameter.UpperBoundDiscountRate)
                    {
                        npv = calculator.CalculateNPV(parameter.InitialValue, parameter.UpperBoundDiscountRate, parameter.Cashflows);
                        result.Add(new NPVResult { DiscountRate = parameter.UpperBoundDiscountRate, Npv = npv });
                    }
                }
            }
            return result;
        }
    }
}