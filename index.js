const Drivers = ['Antonia', 'Nuru', 'Amari', 'Mo' ];

function returnFirstTwoDrivers(Drivers) {
    return Drivers.slice(0, 2);
}

function returnLastTwoDrivers(Drivers) {
    return Drivers.slice(2,4);
}



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiply) {
    return function (fares) {
      return multiply * fares;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };


//   describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
//     });

//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
//     });