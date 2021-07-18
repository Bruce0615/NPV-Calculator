using NPV.Core.Domain;
using NPV.Core.Services;
using NPV.Models.ViewModles;
using System;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace NPV.Controllers
{
    [RoutePrefix("api")]
    public class APIController : ApiController
    {
        CalculationService calculationService = new CalculationService();

        [HttpPost]
        [Route("npv/calculation")]
        public IHttpActionResult Calculate(CalculationParameter parameter)
        {
            CalculationViewModel result = new CalculationViewModel {
                CalculatedDate = DateTime.Now,
                InitialValue = parameter.InitialValue,
                LowerBoundDiscountRate = parameter.LowerBoundDiscountRate,
                UpperBoundDiscountRate = parameter.UpperBoundDiscountRate,
                DiscountRateIncrement = parameter.DiscountRateIncrement,
                Cashflows = parameter.Cashflows.Select(value => new Cashflow { Value = value }).ToArray(),
                NpvResults = calculationService.CalculateNPV(parameter).ToArray()
            };
            return Ok(result);
        }

        [HttpGet]
        [Route("npv/test")]
        public HttpResponseMessage Test()
        {
            return new HttpResponseMessage()
            {
                Content = new StringContent(
                "<strong>test</strong>",
                Encoding.UTF8,
                "text/html")
            };
        }
    }
}
