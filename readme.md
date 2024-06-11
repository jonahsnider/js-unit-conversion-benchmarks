# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 11 Jun 2024 12:08:03 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az698-572 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (258%)        | `360`ns (300%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `521`ns (434%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `621`ns (518%)        | `711`ns (593%)                 | `1,610,306`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,263`ns (1,053%)             | `860,585`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (1,093%)    | `1,503`ns (1,253%)             | `762,195`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,393`ns (1,161%)    | `1,573`ns (1,311%)             | `717,875`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,735`ns (2,279%)    | `2,985`ns (2,488%)             | `365,631`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,471`ns (3,726%)    | `4,919`ns (4,099%)             | `223,664`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,151`ns (60,959%)  | `74,303`ns (61,919%)           | `13,670`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `922`ns (100%)        | `1,172`ns (127%)               | `1,084,599`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,399`ns (3,514%)   | `42,687`ns (4,630%)            | `30,865`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,079`ns (9,336%)   | `91,583`ns (9,933%)            | `11,617`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (230%)        | `331`ns (253%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (314%)        | `461`ns (352%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (405%)        | `581`ns (444%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (994%)      | `1,403`ns (1,071%)             | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,351`ns (3,321%)    | `4,579`ns (3,495%)             | `229,832`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,311`ns (28,482%)  | `38,111`ns (29,092%)           | `26,802`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (246%)        | `371`ns (285%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (355%)        | `530`ns (408%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,087%)    | `1,583`ns (1,218%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,703`ns (1,310%)    | `2,095`ns (1,612%)             | `587,199`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,615`ns (5,088%)    | `7,527`ns (5,790%)             | `151,172`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,831`ns (62,178%)  | `81,855`ns (62,965%)           | `12,371`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `592`ns (123%)        | `671`ns (140%)                 | `1,689,189`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `251`ns (109%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (243%)        | `611`ns (265%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
