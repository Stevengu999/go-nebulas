// Copyright (C) 2017 go-nebulas authors
//
// This file is part of the go-nebulas library.
//
// the go-nebulas library is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// the go-nebulas library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with the go-nebulas library.  If not, see <http://www.gnu.org/licenses/>.
//

Blockchain.blockParse("{\"timestamp\":20000000000,\"dateAvailable\":true}");

console.log(Date.now());
console.log(Date.UTC());
console.log(Date.parse('01 Jan 1970 00:00:00 GMT'));

var date = new Date('August 19, 2017 23:15:30');
var date2 = new Date('August 19, 2017 23:15:30');
console.log(date.getTime());
eq(date.getDate(), date.getUTCDate());
eq(date.getDay(), date.getUTCDay());
eq(date.getFullYear(), date.getUTCFullYear());
eq(date.getHours(), date.getUTCHours());
eq(date.getMilliseconds(), date.getUTCMilliseconds());
eq(date.getMinutes(), date.getUTCMinutes());
eq(date.getMonth(), date.getUTCMonth());
eq(date.getSeconds(), date.getUTCSeconds());
eq(date.toString(), date.toUTCString());

try {
    date.getTimezoneOffset();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}
try {
    date.getYear();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Deprecated!") {
        throw err;
    }
}
try {
    date.setYear(1999);
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Deprecated!") {
        throw err;
    }
}
try {
    date.toDateString();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}
try {
    date.toTimeString();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}

var tmp = new Date('August 19, 1975 23:15:30 UTC');
if (tmp.toJSON() !== "1975-08-19T23:15:30.000Z") {
    throw new Error("toJSON is not equal.")
}
try {
    date.toLocaleDateString();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}
try {
    date.toLocaleTimeString();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}

try {
    date.toLocaleString();
    throw new Error("should not be here.");
} catch(err) {
    if (err != "Error: Unsupported method!") {
        throw err;
    }
}

date.setDate(12);
date2.setUTCDate(12);
eq(date - date2, 0);

date.setMonth(1);
date2.setUTCMonth(1);
eq(date - date2, 0);

date.setFullYear(1999);
date2.setUTCFullYear(1999);
eq(date - date2, 0);

date.setHours(22);
date2.setUTCHours(22);
eq(date - date2, 0);

date.setMilliseconds(420);
date2.setUTCMilliseconds(420);
eq(date - date2, 0);

date.setMinutes(12);
date2.setUTCMinutes(12);
eq(date - date2, 0);

date.setSeconds(12);
date2.setUTCSeconds(12);
eq(date - date2, 0);

function eq(a, b) {
    if (a !== b) {
        throw new Error("Not equal.");
    }
}