# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 25 Nov 2026 21:23:46 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 Intel(R) Xeon(R) 6973P-C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `33`ns (100%)         | `34`ns (103%)                  | `30,303,030`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85`ns (258%)         | `87`ns (264%)                  | `11,764,706`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `99`ns (300%)         | `107`ns (324%)                 | `10,101,010`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (303%)        | `103`ns (312%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `140`ns (424%)        | `159`ns (482%)                 | `7,142,857`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `239`ns (724%)        | `244`ns (739%)                 | `4,184,100`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `288`ns (873%)        | `306`ns (927%)                 | `3,472,222`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `330`ns (1,000%)      | `336`ns (1,018%)               | `3,030,303`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `673`ns (2,039%)      | `693`ns (2,100%)               | `1,485,884`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,093`ns (3,312%)    | `1,119`ns (3,391%)             | `914,913`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `241`ns (100%)        | `266`ns (110%)                 | `4,149,378`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,069`ns (444%)      | `1,167`ns (484%)               | `935,454`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `13,071`ns (5,424%)   | `14,535`ns (6,031%)            | `76,505`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `56`ns (100%)         | `59`ns (105%)                  | `17,857,143`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `82`ns (146%)         | `100`ns (179%)                 | `12,195,122`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `88`ns (157%)         | `95`ns (170%)                  | `11,363,636`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `91`ns (163%)         | `95`ns (170%)                  | `10,989,011`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `129`ns (230%)        | `137`ns (245%)                 | `7,751,938`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `328`ns (586%)        | `336`ns (600%)                 | `3,048,780`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,132`ns (2,021%)    | `1,159`ns (2,070%)             | `883,392`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `33`ns (100%)         | `34`ns (103%)                  | `30,303,030`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `87`ns (264%)         | `108`ns (327%)                 | `11,494,253`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `91`ns (276%)         | `95`ns (288%)                  | `10,989,011`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (303%)        | `103`ns (312%)                 | `10,000,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `339`ns (1,027%)      | `362`ns (1,097%)               | `2,949,853`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `822`ns (2,491%)      | `834`ns (2,527%)               | `1,216,545`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,584`ns (4,800%)    | `1,617`ns (4,900%)             | `631,313`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `107`ns (100%)        | `110`ns (103%)                 | `9,345,794`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `129`ns (121%)        | `131`ns (122%)                 | `7,751,938`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `156`ns (146%)        | `172`ns (161%)                 | `6,410,256`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `37`ns (100%)         | `45`ns (122%)                  | `27,027,027`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `104`ns (281%)        | `116`ns (314%)                 | `9,615,385`/sec       |

<!-- endblock(results) -->
