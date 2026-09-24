# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Sep 2026 08:14:48 GMT with Node.js v26.10.0 (V8 v14.6.202.34-node.34) on runnervmtr4k5 (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `38`ns (100%)         | `40`ns (105%)                  | `26,315,789`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (211%)         | `82`ns (216%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `83`ns (218%)         | `86`ns (226%)                  | `12,048,193`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `88`ns (232%)         | `104`ns (274%)                 | `11,363,636`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `157`ns (413%)        | `174`ns (458%)                 | `6,369,427`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `250`ns (658%)        | `269`ns (708%)                 | `4,000,000`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `335`ns (882%)        | `356`ns (937%)                 | `2,985,075`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `356`ns (937%)        | `365`ns (961%)                 | `2,808,989`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `766`ns (2,016%)      | `791`ns (2,082%)               | `1,305,483`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,265`ns (3,329%)    | `1,300`ns (3,421%)             | `790,514`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `384`ns (100%)        | `397`ns (103%)                 | `2,604,167`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `785`ns (204%)        | `819`ns (213%)                 | `1,273,885`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `15,895`ns (4,139%)   | `16,143`ns (4,204%)            | `62,913`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `38`ns (100%)         | `39`ns (103%)                  | `26,315,789`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `83`ns (218%)         | `86`ns (226%)                  | `12,048,193`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `92`ns (242%)         | `95`ns (250%)                  | `10,869,565`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `99`ns (261%)         | `103`ns (271%)                 | `10,101,010`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `133`ns (350%)        | `154`ns (405%)                 | `7,518,797`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `370`ns (974%)        | `376`ns (989%)                 | `2,702,703`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,361`ns (3,582%)    | `1,386`ns (3,647%)             | `734,754`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `41`ns (102%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `79`ns (198%)         | `83`ns (208%)                  | `12,658,228`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (225%)         | `94`ns (235%)                  | `11,111,111`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `97`ns (242%)         | `101`ns (253%)                 | `10,309,278`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `377`ns (943%)        | `400`ns (1,000%)               | `2,652,520`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `956`ns (2,390%)      | `968`ns (2,420%)               | `1,046,025`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,918`ns (4,795%)    | `1,948`ns (4,870%)             | `521,376`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `135`ns (100%)        | `138`ns (102%)                 | `7,407,407`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `162`ns (120%)        | `167`ns (124%)                 | `6,172,840`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `198`ns (147%)        | `203`ns (150%)                 | `5,050,505`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `40`ns (100%)         | `41`ns (102%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `80`ns (200%)         | `82`ns (205%)                  | `12,500,000`/sec      |

<!-- endblock(results) -->
