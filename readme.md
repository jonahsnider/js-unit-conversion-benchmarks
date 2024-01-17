# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 17 Jan 2024 12:23:50 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az520-537 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `202`ns (112%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (199%)        | `441`ns (244%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `442`ns (244%)        | `542`ns (299%)                 | `2,262,443`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `562`ns (310%)        | `682`ns (377%)                 | `1,779,359`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,003`ns (554%)      | `1,234`ns (682%)               | `997,009`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,173`ns (648%)      | `1,523`ns (841%)               | `852,515`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,202`ns (664%)      | `1,553`ns (858%)               | `831,947`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,315`ns (1,279%)    | `2,795`ns (1,544%)             | `431,965`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,099`ns (2,265%)    | `5,063`ns (2,797%)             | `243,962`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,991`ns (4,967%)    | `9,639`ns (5,325%)             | `111,222`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `833`ns (100%)        | `933`ns (112%)                 | `1,200,480`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,239`ns (3,870%)   | `39,199`ns (4,706%)            | `31,018`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,639`ns (4,879%)   | `41,183`ns (4,944%)            | `24,607`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `222`ns (110%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `401`ns (199%)        | `441`ns (218%)                 | `2,493,766`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `542`ns (268%)        | `591`ns (293%)                 | `1,845,018`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (302%)        | `661`ns (327%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,314`ns (650%)      | `1,403`ns (695%)               | `761,035`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (685%)      | `1,484`ns (735%)               | `723,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,831`ns (2,392%)    | `5,043`ns (2,497%)             | `206,996`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `222`ns (116%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `381`ns (199%)        | `441`ns (231%)                 | `2,624,672`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `492`ns (258%)        | `562`ns (294%)                 | `2,032,520`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,283`ns (672%)      | `1,392`ns (729%)               | `779,423`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,723`ns (902%)      | `1,894`ns (992%)               | `580,383`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,095`ns (3,191%)    | `6,275`ns (3,285%)             | `164,069`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,775`ns (3,547%)    | `7,123`ns (3,729%)             | `147,601`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `642`ns (112%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (105%)        | `663`ns (116%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (118%)        | `753`ns (132%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (170%)        | `563`ns (187%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
