# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 08 Nov 2023 07:25:25 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az525-621 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `210`ns (208%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `391`ns (387%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `212`ns (210%)        | `461`ns (456%)                 | `4,716,981`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `290`ns (287%)        | `622`ns (616%)                 | `3,448,276`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `502`ns (497%)        | `1,122`ns (1,111%)             | `1,992,032`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `652`ns (646%)        | `1,383`ns (1,369%)             | `1,533,742`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `682`ns (675%)        | `1,543`ns (1,528%)             | `1,466,276`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,223`ns (1,211%)    | `2,757`ns (2,730%)             | `817,661`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,567`ns (2,542%)    | `4,803`ns (4,755%)             | `389,560`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,439`ns (4,395%)    | `9,479`ns (9,385%)             | `225,276`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `842`ns (100%)        | `973`ns (116%)                 | `1,187,648`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,271`ns (3,833%)   | `39,167`ns (4,652%)            | `30,988`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,935`ns (4,743%)   | `40,671`ns (4,830%)            | `25,041`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `220`ns (115%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (179%)        | `392`ns (205%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (226%)        | `481`ns (252%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (305%)        | `633`ns (331%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,353`ns (708%)      | `1,474`ns (772%)               | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,372`ns (718%)      | `1,534`ns (803%)               | `728,863`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (2,425%)    | `4,991`ns (2,613%)             | `215,936`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `220`ns (115%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (194%)        | `422`ns (221%)                 | `2,695,418`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (236%)        | `511`ns (268%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,393`ns (729%)      | `1,513`ns (792%)               | `717,875`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,804`ns (945%)      | `2,055`ns (1,076%)             | `554,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,923`ns (3,101%)    | `6,135`ns (3,212%)             | `168,833`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,735`ns (3,526%)    | `7,195`ns (3,767%)             | `148,478`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `552`ns (100%)        | `622`ns (113%)                 | `1,811,594`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `591`ns (107%)        | `661`ns (120%)                 | `1,692,047`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (118%)        | `742`ns (134%)                 | `1,533,742`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `281`ns (100%)        | `302`ns (107%)                 | `3,558,719`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (182%)        | `573`ns (204%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
