var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

// Arrays are 0-indexed, meaning the first item is at index 0, and the 3rd item is index 2

counties[0];
counties[2];

counties[2] = "Cheshire";
counties;

counties[4] = "Carroll";
counties;

counties[counties.length] = "Merrimack";
counties;

counties.push("Coos");
counties;

counties.pop();

delete counties[2];
counties;

counties.splice(2, 1);
counties;
counties.length;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
