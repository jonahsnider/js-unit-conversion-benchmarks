# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 31 Jan 2024 03:45:56 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az774-487 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `202`ns (168%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `191`ns (159%)        | `361`ns (301%)                 | `5,235,602`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `202`ns (168%)        | `461`ns (384%)                 | `4,950,495`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (276%)        | `663`ns (553%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `532`ns (443%)        | `1,163`ns (969%)               | `1,879,699`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `701`ns (584%)        | `1,463`ns (1,219%)             | `1,426,534`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `712`ns (593%)        | `1,574`ns (1,312%)             | `1,404,494`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,242`ns (1,035%)    | `2,805`ns (2,338%)             | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,595`ns (2,163%)    | `4,871`ns (4,059%)             | `385,356`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,499`ns (3,749%)    | `9,671`ns (8,059%)             | `222,272`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `862`ns (100%)        | `923`ns (107%)                 | `1,160,093`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,311`ns (3,632%)   | `38,015`ns (4,410%)            | `31,938`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (4,651%)   | `40,639`ns (4,715%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (174%)        | `391`ns (195%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (234%)        | `512`ns (255%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `572`ns (285%)        | `621`ns (309%)                 | `1,748,252`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,283`ns (638%)      | `1,372`ns (683%)               | `779,423`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,404`ns (699%)      | `1,503`ns (748%)               | `712,251`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,711`ns (2,344%)    | `4,963`ns (2,469%)             | `212,269`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `221`ns (100%)        | `231`ns (105%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (172%)        | `432`ns (195%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (204%)        | `542`ns (245%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,284`ns (581%)      | `1,433`ns (648%)               | `778,816`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,674`ns (757%)      | `1,945`ns (880%)               | `597,372`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,891`ns (2,666%)    | `6,163`ns (2,789%)             | `169,750`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,415`ns (2,903%)    | `7,267`ns (3,288%)             | `155,885`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `661`ns (114%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `682`ns (117%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `663`ns (114%)        | `761`ns (131%)                 | `1,508,296`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `300`ns (100%)        | `330`ns (110%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (177%)        | `591`ns (197%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
