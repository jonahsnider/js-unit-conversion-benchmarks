# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 21 Jun 2024 19:50:51 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1114-875 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (265%)        | `351`ns (290%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (348%)        | `470`ns (388%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (497%)        | `671`ns (555%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (936%)      | `1,193`ns (986%)               | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,252`ns (1,035%)    | `1,372`ns (1,134%)             | `798,722`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,372`ns (1,134%)    | `1,463`ns (1,209%)             | `728,863`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,605`ns (2,153%)    | `2,745`ns (2,269%)             | `383,877`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,399`ns (3,636%)    | `4,619`ns (3,817%)             | `227,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,831`ns (60,191%)  | `73,471`ns (60,720%)           | `13,730`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `731`ns (100%)        | `912`ns (125%)                 | `1,367,989`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,055`ns (4,248%)   | `39,167`ns (5,358%)            | `32,201`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,183`ns (11,653%)  | `86,655`ns (11,854%)           | `11,739`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `161`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (221%)        | `380`ns (253%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `491`ns (327%)        | `561`ns (374%)                 | `2,036,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (367%)        | `612`ns (408%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (828%)      | `1,433`ns (955%)               | `805,153`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,419`ns (2,946%)    | `4,931`ns (3,287%)             | `226,296`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,183`ns (24,789%)  | `38,111`ns (25,407%)           | `26,894`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `360`ns (277%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (385%)        | `561`ns (432%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,373`ns (1,056%)    | `1,493`ns (1,148%)             | `728,332`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,643`ns (1,264%)    | `1,923`ns (1,479%)             | `608,643`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,503`ns (5,002%)    | `7,195`ns (5,535%)             | `153,775`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,087`ns (62,375%)  | `81,791`ns (62,916%)           | `12,332`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `530`ns (108%)        | `581`ns (118%)                 | `1,886,792`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (124%)        | `681`ns (139%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `250`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (240%)        | `611`ns (266%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
