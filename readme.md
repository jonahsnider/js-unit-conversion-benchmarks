# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 22 Jun 2024 11:16:35 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1759-972 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (293%)        | `391`ns (326%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (384%)        | `531`ns (443%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (493%)        | `681`ns (568%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,102`ns (918%)      | `1,212`ns (1,010%)             | `907,441`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (1,060%)    | `1,522`ns (1,268%)             | `786,164`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,443`ns (1,203%)    | `1,623`ns (1,353%)             | `693,001`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,221%)    | `2,925`ns (2,438%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,579`ns (3,816%)    | `5,123`ns (4,269%)             | `218,388`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,087`ns (60,906%)  | `73,791`ns (61,492%)           | `13,682`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `801`ns (100%)        | `962`ns (120%)                 | `1,248,439`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,167`ns (3,891%)   | `39,071`ns (4,878%)            | `32,085`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,503`ns (10,675%)  | `86,591`ns (10,810%)           | `11,695`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (215%)        | `350`ns (250%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (314%)        | `521`ns (372%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (358%)        | `591`ns (422%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,262`ns (901%)      | `1,473`ns (1,052%)             | `792,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,359`ns (3,114%)    | `4,899`ns (3,499%)             | `229,410`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,279`ns (26,628%)  | `38,143`ns (27,245%)           | `26,825`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (244%)        | `341`ns (260%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (337%)        | `490`ns (374%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,079%)    | `1,493`ns (1,140%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,754`ns (1,339%)    | `1,883`ns (1,437%)             | `570,125`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,443`ns (4,918%)    | `6,763`ns (5,163%)             | `155,207`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,279`ns (62,045%)  | `81,727`ns (62,387%)           | `12,303`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `531`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `562`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `602`ns (128%)        | `671`ns (142%)                 | `1,661,130`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `251`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `562`ns (244%)        | `621`ns (270%)                 | `1,779,359`/sec       |

<!-- endblock(results) -->
