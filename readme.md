# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Jan 2024 07:59:44 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1014-724 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `212`ns (193%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (183%)        | `391`ns (355%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `231`ns (210%)        | `522`ns (475%)                 | `4,329,004`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (301%)        | `661`ns (601%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `511`ns (465%)        | `1,173`ns (1,066%)             | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `641`ns (583%)        | `1,344`ns (1,222%)             | `1,560,062`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `672`ns (611%)        | `1,504`ns (1,367%)             | `1,488,095`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,262`ns (1,147%)    | `2,767`ns (2,515%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,567`ns (2,334%)    | `4,899`ns (4,454%)             | `389,560`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,459`ns (4,054%)    | `9,623`ns (8,748%)             | `224,266`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `832`ns (100%)        | `943`ns (113%)                 | `1,201,923`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,383`ns (3,892%)   | `40,191`ns (4,831%)            | `30,880`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (4,819%)   | `40,863`ns (4,911%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `212`ns (106%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (175%)        | `401`ns (201%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (231%)        | `522`ns (261%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (276%)        | `622`ns (311%)                 | `1,811,594`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,182`ns (591%)      | `1,312`ns (656%)               | `846,024`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,322`ns (661%)      | `1,553`ns (777%)               | `756,430`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,499`ns (2,250%)    | `5,139`ns (2,570%)             | `222,272`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `230`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (179%)        | `401`ns (199%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (218%)        | `492`ns (244%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (650%)      | `1,404`ns (695%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,815`ns (899%)      | `2,005`ns (993%)               | `550,964`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,055`ns (2,998%)    | `6,223`ns (3,081%)             | `165,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,735`ns (3,334%)    | `7,075`ns (3,502%)             | `148,478`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `661`ns (114%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (103%)        | `671`ns (115%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `681`ns (117%)        | `762`ns (131%)                 | `1,468,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (168%)        | `582`ns (187%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
