# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 30 Jul 2024 01:21:24 GMT with Node.js v20.15.1 (V8 v11.3.244.8-node.23) on fv-az566-898 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `71`ns (118%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `220`ns (367%)        | `291`ns (485%)                 | `4,545,455`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (468%)        | `351`ns (585%)                 | `3,558,719`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `440`ns (733%)        | `601`ns (1,002%)               | `2,272,727`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `822`ns (1,370%)      | `1,072`ns (1,787%)             | `1,216,545`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,022`ns (1,703%)    | `1,403`ns (2,338%)             | `978,474`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (1,853%)    | `1,372`ns (2,287%)             | `899,281`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,135`ns (3,558%)    | `2,595`ns (4,325%)             | `468,384`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,767`ns (6,278%)    | `4,559`ns (7,598%)             | `265,463`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `64,095`ns (106,825%) | `65,119`ns (108,532%)          | `15,602`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `811`ns (100%)        | `1,253`ns (155%)               | `1,233,046`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,319`ns (3,738%)   | `52,319`ns (6,451%)            | `32,983`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `77,695`ns (9,580%)   | `140,543`ns (17,330%)          | `12,871`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `80`ns (100%)         | `90`ns (113%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (351%)        | `301`ns (376%)                 | `3,558,719`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (363%)        | `320`ns (400%)                 | `3,448,276`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (626%)        | `561`ns (701%)                 | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (1,640%)    | `1,413`ns (1,766%)             | `762,195`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (5,789%)    | `4,831`ns (6,039%)             | `215,936`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,863`ns (41,079%)  | `33,407`ns (41,759%)           | `30,429`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `71`ns (100%)         | `81`ns (114%)                  | `14,084,507`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (466%)        | `441`ns (621%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `400`ns (563%)        | `441`ns (621%)                 | `2,500,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,363`ns (1,920%)    | `1,532`ns (2,158%)             | `733,676`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,904`ns (2,682%)    | `2,525`ns (3,556%)             | `525,210`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,655`ns (9,373%)    | `7,915`ns (11,148%)            | `150,263`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,487`ns (100,686%) | `73,279`ns (103,210%)          | `13,989`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `380`ns (100%)        | `420`ns (111%)                 | `2,631,579`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `431`ns (113%)        | `490`ns (129%)                 | `2,320,186`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `511`ns (134%)        | `591`ns (156%)                 | `1,956,947`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `71`ns (100%)         | `80`ns (113%)                  | `14,084,507`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `180`ns (254%)        | `190`ns (268%)                 | `5,555,556`/sec       |

<!-- endblock(results) -->
