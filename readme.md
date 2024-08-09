# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Aug 2024 02:22:17 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az2022-775 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `80`ns (133%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (267%)        | `310`ns (517%)                 | `6,250,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `240`ns (400%)        | `441`ns (735%)                 | `4,166,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `341`ns (568%)        | `651`ns (1,085%)               | `2,932,551`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `571`ns (952%)        | `1,142`ns (1,903%)             | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `612`ns (1,020%)      | `1,152`ns (1,920%)             | `1,633,987`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `711`ns (1,185%)      | `1,433`ns (2,388%)             | `1,406,470`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,493`ns (2,488%)    | `2,705`ns (4,508%)             | `669,792`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,445`ns (4,075%)    | `4,779`ns (7,965%)             | `408,998`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `35,711`ns (59,518%)  | `64,799`ns (107,998%)          | `28,003`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,403`ns (165%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,207`ns (3,545%)   | `52,287`ns (6,137%)            | `33,105`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,735`ns (9,006%)   | `138,751`ns (16,285%)          | `13,032`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `81`ns (100%)         | `90`ns (111%)                  | `12,345,679`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (296%)        | `270`ns (333%)                 | `4,166,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (370%)        | `321`ns (396%)                 | `3,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `441`ns (544%)        | `491`ns (606%)                 | `2,267,574`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,002`ns (1,237%)    | `1,062`ns (1,311%)             | `998,004`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,099`ns (5,060%)    | `4,299`ns (5,307%)             | `243,962`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,367`ns (39,959%)  | `32,799`ns (40,493%)           | `30,896`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `80`ns (100%)         | `80`ns (100%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `300`ns (375%)        | `401`ns (501%)                 | `3,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (414%)        | `421`ns (526%)                 | `3,021,148`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,182`ns (1,478%)    | `1,372`ns (1,715%)             | `846,024`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `2,615`ns (3,269%)    | `2,855`ns (3,569%)             | `382,409`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,763`ns (7,204%)    | `6,715`ns (8,394%)             | `173,521`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,783`ns (88,479%)  | `71,871`ns (89,839%)           | `14,128`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `361`ns (100%)        | `401`ns (111%)                 | `2,770,083`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `421`ns (117%)        | `471`ns (130%)                 | `2,375,297`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `511`ns (142%)        | `571`ns (158%)                 | `1,956,947`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `171`ns (244%)        | `190`ns (271%)                 | `5,847,953`/sec       |

<!-- endblock(results) -->
