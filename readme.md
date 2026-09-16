# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 16 Sep 2026 12:20:02 GMT with Node.js v26.8.2 (V8 v14.6.202.34-node.28) on runnervmlun5p (Linux-x64 AMD EPYC 9V74 80-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (225%)         | `100`ns (250%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `101`ns (253%)        | `110`ns (275%)                 | `9,900,990`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (450%)        | `180`ns (450%)                 | `5,555,556`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `281`ns (703%)        | `291`ns (728%)                 | `3,558,719`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `381`ns (953%)        | `391`ns (978%)                 | `2,624,672`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `411`ns (1,028%)      | `440`ns (1,100%)               | `2,433,090`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `851`ns (2,128%)      | `921`ns (2,303%)               | `1,175,088`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,392`ns (3,480%)    | `1,422`ns (3,555%)             | `718,391`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (100%)        | `360`ns (106%)                 | `2,941,176`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `862`ns (254%)        | `932`ns (274%)                 | `1,160,093`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,367`ns (4,520%)   | `15,615`ns (4,593%)            | `65,075`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `90`ns (180%)         | `100`ns (200%)                 | `11,111,111`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `180`ns (360%)        | `181`ns (362%)                 | `5,555,556`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `401`ns (802%)        | `410`ns (820%)                 | `2,493,766`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,523`ns (3,046%)    | `1,563`ns (3,126%)             | `656,599`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `91`ns (228%)         | `100`ns (250%)                 | `10,989,011`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `110`ns (275%)                 | `10,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (300%)        | `120`ns (300%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `380`ns (950%)        | `460`ns (1,150%)               | `2,631,579`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `952`ns (2,380%)      | `962`ns (2,405%)               | `1,050,420`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,213`ns (5,533%)    | `2,245`ns (5,613%)             | `451,875`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `150`ns (100%)        | `160`ns (107%)                 | `6,666,667`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `181`ns (121%)        | `190`ns (127%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `220`ns (147%)        | `230`ns (153%)                 | `4,545,455`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
