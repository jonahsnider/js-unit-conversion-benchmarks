# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Feb 2024 11:00:22 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az738-855 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `210`ns (111%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (201%)        | `472`ns (248%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `492`ns (259%)        | `602`ns (317%)                 | `2,032,520`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `661`ns (348%)        | `822`ns (433%)                 | `1,512,859`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,163`ns (612%)      | `1,332`ns (701%)               | `859,845`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (707%)      | `1,783`ns (938%)               | `744,602`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,383`ns (728%)      | `1,815`ns (955%)               | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,627`ns (1,383%)    | `3,137`ns (1,651%)             | `380,662`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,651`ns (2,448%)    | `5,795`ns (3,050%)             | `215,008`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,743`ns (37,759%)  | `73,727`ns (38,804%)           | `13,939`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `1,183`ns (151%)               | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,615`ns (4,554%)   | `52,735`ns (6,744%)            | `28,078`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,351`ns (10,787%)  | `152,447`ns (19,495%)          | `11,855`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (195%)        | `402`ns (210%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `533`ns (279%)        | `572`ns (299%)                 | `1,876,173`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `592`ns (310%)        | `632`ns (331%)                 | `1,689,189`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,322`ns (692%)      | `1,414`ns (740%)               | `756,430`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,531`ns (2,372%)    | `4,731`ns (2,477%)             | `220,702`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,767`ns (19,250%)  | `37,407`ns (19,585%)           | `27,198`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (195%)        | `451`ns (224%)                 | `2,551,020`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (264%)        | `602`ns (300%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,402`ns (698%)      | `1,542`ns (767%)               | `713,267`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,614`ns (803%)      | `1,934`ns (962%)               | `619,579`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,575`ns (3,271%)    | `7,375`ns (3,669%)             | `152,091`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,191`ns (39,896%)  | `81,279`ns (40,437%)           | `12,470`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `621`ns (111%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `582`ns (104%)        | `651`ns (116%)                 | `1,718,213`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `651`ns (116%)        | `731`ns (130%)                 | `1,536,098`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `340`ns (113%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (176%)        | `592`ns (197%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
