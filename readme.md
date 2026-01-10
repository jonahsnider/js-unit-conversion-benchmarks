# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Jan 2026 04:46:22 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmi13qx (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `65`ns (100%)         | `66`ns (102%)                  | `15,384,615`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (171%)        | `113`ns (174%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `128`ns (197%)        | `131`ns (202%)                 | `7,812,500`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `154`ns (237%)        | `157`ns (242%)                 | `6,493,506`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `196`ns (302%)        | `201`ns (309%)                 | `5,102,041`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `323`ns (497%)        | `332`ns (511%)                 | `3,095,975`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `490`ns (754%)        | `508`ns (782%)                 | `2,040,816`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `662`ns (1,018%)      | `676`ns (1,040%)               | `1,510,574`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,015`ns (1,562%)    | `1,094`ns (1,683%)             | `985,222`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,750`ns (2,692%)    | `1,782`ns (2,742%)             | `571,429`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `404`ns (100%)        | `421`ns (104%)                 | `2,475,248`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,458`ns (361%)      | `1,549`ns (383%)               | `685,871`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,743`ns (5,877%)   | `24,303`ns (6,016%)            | `42,118`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `58`ns (100%)         | `59`ns (102%)                  | `17,241,379`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (190%)        | `114`ns (197%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `138`ns (238%)        | `143`ns (247%)                 | `7,246,377`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (276%)        | `172`ns (297%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (379%)        | `256`ns (441%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `669`ns (1,153%)      | `684`ns (1,179%)               | `1,494,768`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,925`ns (3,319%)    | `2,012`ns (3,469%)             | `519,481`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `62`ns (103%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `118`ns (197%)        | `121`ns (202%)                 | `8,474,576`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `139`ns (232%)        | `143`ns (238%)                 | `7,194,245`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `155`ns (258%)        | `160`ns (267%)                 | `6,451,613`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `549`ns (915%)        | `622`ns (1,037%)               | `1,821,494`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,556`ns (2,593%)    | `1,580`ns (2,633%)             | `642,674`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,503`ns (4,172%)    | `2,613`ns (4,355%)             | `399,521`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `181`ns (100%)        | `191`ns (106%)                 | `5,524,862`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `237`ns (131%)        | `243`ns (134%)                 | `4,219,409`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `290`ns (160%)        | `314`ns (173%)                 | `3,448,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `41`ns (100%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (244%)        | `120`ns (293%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
