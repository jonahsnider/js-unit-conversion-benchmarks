# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 04 Feb 2024 10:25:35 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az883-233 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `220`ns (115%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (195%)        | `430`ns (225%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (236%)        | `502`ns (263%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (341%)        | `702`ns (368%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,192`ns (624%)      | `1,293`ns (677%)               | `838,926`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (708%)      | `1,513`ns (792%)               | `739,098`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,452`ns (760%)      | `1,584`ns (829%)               | `688,705`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,827`ns (1,480%)    | `3,007`ns (1,574%)             | `353,732`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,819`ns (2,523%)    | `5,111`ns (2,676%)             | `207,512`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,431`ns (4,938%)    | `9,623`ns (5,038%)             | `106,033`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `802`ns (100%)        | `932`ns (116%)                 | `1,246,883`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (3,984%)   | `38,719`ns (4,828%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (4,999%)   | `40,639`ns (5,067%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (190%)        | `412`ns (216%)                 | `2,762,431`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (247%)        | `541`ns (283%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `622`ns (326%)        | `701`ns (367%)                 | `1,607,717`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,252`ns (655%)      | `1,383`ns (724%)               | `798,722`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,322`ns (692%)      | `1,524`ns (798%)               | `756,430`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,571`ns (2,393%)    | `5,091`ns (2,665%)             | `218,771`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `212`ns (100%)        | `240`ns (113%)                 | `4,716,981`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (180%)        | `422`ns (199%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `492`ns (232%)        | `531`ns (250%)                 | `2,032,520`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,394`ns (658%)      | `1,463`ns (690%)               | `717,360`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,864`ns (879%)      | `1,994`ns (941%)               | `536,481`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,083`ns (2,869%)    | `6,223`ns (2,935%)             | `164,393`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (3,209%)    | `7,043`ns (3,322%)             | `146,994`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `592`ns (104%)        | `661`ns (116%)                 | `1,689,189`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (116%)        | `751`ns (132%)                 | `1,512,859`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `340`ns (113%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (173%)        | `582`ns (193%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
