using Microsoft.VisualStudio.TestTools.UnitTesting;
using NPV.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NPV.Core.Domain.Tests
{
    [TestClass()]
    public class NPVCalculatorTests
    {
        NPVCalculator calculator = new NPVCalculator();

        [TestMethod()]  
        public void CalculateNPVTest_WithPositiveCashflows()
        {
            //Arrange
            var InitalValue = 10000.63m;
            var DiscountRate = 3.46m;
            var Cashflows = new decimal[] { 2005.63m, 2500.36m, 3000.32m, 2600.36m, 2300.36m };

            //Act
            decimal NPV = calculator.CalculateNPV(InitalValue, DiscountRate, Cashflows);

            //Assert
            Assert.AreEqual<decimal>(1193.26m, NPV);
        }

        [TestMethod()]
        public void CalculateNPVTest_WithNegativeCashflows()
        {
            //Arrange
            var InitalValue = 10000.63m;
            var DiscountRate = 5.25m;
            var Cashflows = new decimal[] { 2005.63m, -2500.36m, 3000.32m, -2600.36m, 2300.36m };

            //Act
            decimal NPV = calculator.CalculateNPV(InitalValue, DiscountRate, Cashflows);

            //Assert
            Assert.AreEqual<decimal>(-8116.80m, NPV);
        }

        [TestMethod()]
        public void CalculateNPVTest_WithEmptyCashflows()
        {
            //Arrange
            var InitalValue = 10000.63m;
            var DiscountRate = 8.36m;
            var Cashflows = new decimal[] {  };

            //Act
            decimal NPV = calculator.CalculateNPV(InitalValue, DiscountRate, Cashflows);

            //Assert
            Assert.AreEqual<decimal>(-10000.63m, NPV);
        }
    }
}