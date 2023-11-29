# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 29 Nov 2023 13:04:53 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1385-435 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `180`ns (100%)        | `202`ns (112%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (184%)        | `401`ns (223%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (234%)        | `510`ns (283%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `542`ns (301%)        | `653`ns (363%)                 | `1,845,018`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `913`ns (507%)        | `1,072`ns (596%)               | `1,095,290`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,193`ns (663%)      | `1,444`ns (802%)               | `838,223`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,263`ns (702%)      | `1,544`ns (858%)               | `791,766`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,475`ns (1,375%)    | `2,937`ns (1,632%)             | `404,040`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,331`ns (2,406%)    | `4,979`ns (2,766%)             | `230,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,991`ns (4,995%)    | `9,671`ns (5,373%)             | `111,222`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)        | `852`ns (109%)                 | `1,280,410`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,743`ns (4,064%)   | `38,463`ns (4,925%)            | `31,503`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,519`ns (5,060%)   | `40,159`ns (5,142%)            | `25,304`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (168%)        | `372`ns (195%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (210%)        | `451`ns (236%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `562`ns (294%)        | `632`ns (331%)                 | `1,779,359`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (635%)      | `1,364`ns (714%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,283`ns (672%)      | `1,522`ns (797%)               | `779,423`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,371`ns (2,288%)    | `4,959`ns (2,596%)             | `228,781`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `200`ns (110%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (206%)        | `412`ns (228%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (249%)        | `493`ns (272%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,232`ns (681%)      | `1,322`ns (730%)               | `811,688`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,664`ns (919%)      | `1,853`ns (1,024%)             | `600,962`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,923`ns (3,272%)    | `6,083`ns (3,361%)             | `168,833`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,663`ns (3,681%)    | `7,087`ns (3,915%)             | `150,083`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `662`ns (116%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `681`ns (119%)        | `762`ns (133%)                 | `1,468,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `282`ns (100%)        | `311`ns (110%)                 | `3,546,099`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `502`ns (178%)        | `552`ns (196%)                 | `1,992,032`/sec       |

<!-- endblock(results) -->
